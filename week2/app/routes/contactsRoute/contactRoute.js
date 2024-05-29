const router = require("express").Router();
const {
  ContactModel,
  Pager,
  sortContacts,
  filterContacts,
} = require("@jworkman-fs/asl");

const contacts = ContactModel;

// GET Contacts with filtering, sorting, and pagination
router.get("/", async (req, res) => {
  try {
    let allContacts = await contacts.index();

    // Filtering
    const filterBy = req.header("X-Filter-By");
    const filterOperator = req.header("X-Filter-Operator");
    const filterValue = req.header("X-Filter-Value");
    if (filterBy && filterOperator && filterValue) {
      allContacts = filterContacts(
        allContacts,
        filterBy,
        filterOperator,
        filterValue
      );
    }

    // Sorting
    if (req.query.sort) {
      const sortBy = req.query.sort || "lname";
      const sortDirection = req.query.direction || "asc";
      allContacts = sortContacts(allContacts, sortBy, sortDirection);
    }

    // Pagination
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.size);
    const pager = new Pager(allContacts, page, limit);

    res.setHeader("X-Page-Total", pager.total);
    res.setHeader("X-Page-Next", pager.next());
    res.setHeader("X-Page-Prev", pager.prev());
    res.status(200).json(pager.results());
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET Contact by ID
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const contact = contacts
      .index()
      .find((contact) => contact.id === parseInt(id));
    console.log(contact);

    if (contact) {
      res.status(200).json(contact);
    } else {
      res.status(404).json({ message: "Contact not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST Contacts
router.post("/", async (req, res) => {
  try {
    const newContact = await contacts.create({ ...req.body });
    res.status(303).location(`/contacts/${newContact.id}`).json(newContact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT Contacts
router.put("/:id", async (req, res) => {
  try {
    const updatedContact = await contacts.update(req.params.id, req.body);
    if (updatedContact) {
      res
        .status(303)
        .location(`/contacts/${updatedContact.id}`)
        .json(updatedContact);
    } else {
      res.status(404).json({ message: "Contact not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE Contacts
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await contacts.delete(req.params.id);
    if (deleted) {
      res.status(303).location("/contacts").end();
    } else {
      res.status(404).json({ message: "Contact not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
