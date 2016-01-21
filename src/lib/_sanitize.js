//noinspection ThisExpressionReferencesGlobalObjectJS
(function () {

    function _isString(str) {
        return (typeof str == 'string')
    }

    /**
     * Substitui caracteres acentuados por suas versões sem acentos e em seguida remove caracteres fora do [^a-z0-9_\-];
     *
     * @method sanitizeChars
     * @param str
     * @returns {String}
     */
    String.prototype.sanitizeChars = function (str) {

        str = _isString(str) ? str : this;

        str = str.toLowerCase()
            .replace(/^\s+/, "")
            .replace(/\s+$/, "")
            .replace(/\s+/g, "_")
            .replace(/[\u00e1\u00e0\u00e2\u00e3\u00e5\u00e4\u00e6\u00aa]/g, "a")
            .replace(/[\u00e9\u00e8\u00ea\u00eb\u0404\u20ac]/g, "e")
            .replace(/[\u00ed\u00ec\u00ee\u00ef]/g, "i")
            .replace(/[\u00f3\u00f2\u00f4\u00f5\u00f6\u00f8\u00ba]/g, "o")
            .replace(/[\u00fa\u00f9\u00fb\u00fc]/g, "u")
            .replace(/[\u00e7\u00a2\u00a9]/g, "c")
            .replace(/[^a-z0-9_\-]/g, "_")
            .replace(/_+/g, "_");

        return str
    };

}).call(this);