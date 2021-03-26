var menu_list_array= [
    "Baked Potato Pizza",
    "Tandoor Chicken Pizza",
    "Healthilicious Vegan Pizza",
    "Paneer Tikka Pizza",
    "Traditional Italian Pizza"
];

function getMenu() {
    menu_list_array.sort();
    var menu= "<p>" + menu_list_array[0] + "</p><br>";
    for (let i = 1; i < menu_list_array.length; i++) {
        menu= menu + "<p>" + menu_list_array[i] + "</p><br>";
        
    };
    document.getElementById("display_menu").innerHTML= menu;
};

function add_item() {
    menu_list_array.push(document.getElementById("add_item").value)
    menu_list_array.sort();
    var menu= "<p>" + menu_list_array[0] + "</p><br>";
    for (let i = 1; i < menu_list_array.length; i++) {
        menu= menu + "<p>" + menu_list_array[i] + "</p><br>";
        
    };
    document.getElementById("display_menu").innerHTML= menu;
};