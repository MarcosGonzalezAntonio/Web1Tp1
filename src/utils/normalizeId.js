const normalizeId = (id) => {
    if (id === undefined || id === null) return null;

    const stringId = String(id).trim();
    if (!/^[0-9]+$/.test(stringId)) return null;

    return stringId;
};

module.exports = normalizeId;
