let colors = ["red", "green", "blue"];
colors.push("red");

colors = clearDublicates(colors);

function clearDublicates(colors) {
    let unique_color_list = [];

    for (let i = 0; i < colors.length; i++) {
        if (unique_color_list.indexOf(colors[i]) == -1) {
            unique_color_list.push(colors[i]);
        }
    }

    return unique_color_list;
}

function deleteColors(color, colors) {
    let x = colors.indexOf(color);
    colors.splice(x, 1);
    return colors;
}
