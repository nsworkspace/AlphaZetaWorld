const contactService = require("../services/contact.service");

const createContact = async (req, res) => {
    const contact = await contactService.createContact(req.body || {});
    res.status(201).json({ success: true, message: "Contact submitted successfully", data: { contact } });
};

const listContacts = async (req, res) => {
    const { page, limit, status, search } = req.query;
    const result = await contactService.listContacts({ page, limit, status, search });
    res.json({ success: true, data: result.items, pagination: { total: result.total, page: result.page, limit: result.limit, totalPages: result.totalPages } });
};

const updateContactStatus = async (req, res) => {
    const contact = await contactService.updateContactStatus(req.params.id, req.body?.status);
    if (!contact) return res.status(404).json({ success: false, message: "Contact not found" });
    res.json({ success: true, data: { contact } });
};

module.exports = { createContact, listContacts, updateContactStatus };
