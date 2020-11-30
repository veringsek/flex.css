let parent = {
    'display': {
        'flex': '',
        'inline-flex': 'i'
    },
    'flex-direction': {
        'row': 'r',
        'column': 'd',
        'row-reverse': 'l',
        'column-reverse': 'u'
    },
    'flex-wrap': {
        'nowrap': '',
        'wrap': 'w',
        'wrap-reverse': 'r'
    },
    'justify-content': {
        'start': 's',
        'center': 'c',
        'end': 'e',
        'stretch': 'f',
        'space-between': 'b',
        'space-around': 'a'
    },
    'align-items': {
        'start': 's',
        'center': 'c',
        'end': 'e',
        'stretch': 'f',
        'baseline': 'b'
    },
    'align-content': {
        'start': 's',
        'center': 'c',
        'end': 'e',
        'stretch': 'f',
        'space-between': 'b',
        'space-around': 'a'
    }
};
let child = ['flex-grow', 'flex-shrink'];
let max = 5;
function build() {
    let css = "";
    for (let [_display, display] of Object.entries(parent['display'])) {
        for (let [_direction, direction] of Object.entries(parent['flex-direction'])) {
            for (let [_wrap, wrap] of Object.entries(parent['flex-wrap'])) {
                for (let [_justify, justify] of Object.entries(parent['justify-content'])) {
                    for (let [_items, items] of Object.entries(parent['align-items'])) {
                        css += `.${display}flx-${direction}${justify}${items}${wrap} {\n`
                            + `    display: ${_display};\n`
                            + `    flex-direction: ${_direction};\n`
                            + `    flex-wrap: ${_wrap};\n`
                            + `    justify-content: ${_justify};\n`
                            + `    align-items: ${_items};\n`
                            + `}\n`;
                    }
                }
            }
        }
    }
    for (let g = 1; g <= max; g++) {
        for (let s = 1; s <= max; s++) {
            if (g === s) {
                if (g === 1 && s === 1) {
                    css += `.flx, `;
                }
                css += `.flx-${g}, `;
            }
            css += `.flx-${g}-${s} {\n`
                + `    flex-grow: ${g};\n`
                + `    flex-shrink: ${s};\n`
                + `}\n`;
        }
    }
    return css;
}