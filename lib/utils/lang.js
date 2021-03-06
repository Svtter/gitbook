var MAP = {
    'py': 'python',
    'js': 'javascript',
    'rb': 'ruby',
    'csharp': 'cs',
};

function normalize(lang) {
    if(!lang) { return null; }

    var lower = lang.toLowerCase();
    return MAP[lower] || lower;
}

// Exports
module.exports = {
    normalize: normalize,
    MAP: MAP
};
