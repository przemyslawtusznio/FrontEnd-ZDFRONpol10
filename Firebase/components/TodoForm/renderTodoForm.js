// 1. Stwórz element <form> i nadaj mu id 'todo-form'
// 2. Stwórz element <inoput> i nadaj mu id 'todo-input'
// 3. Stwórz element <fieldset> i  nadaj mu id "todo-fieldset"
// 4. Stwórz element <legend> i nadaj mu textContent "Select a category"
// 5. Stwórz element <div> i nadaj mu id 'div-work'
// 6. Stwórz element <input>, nadaj mu type "radio", id "radio-work", name "category", value "work", checked "true"
// 7. Stwórz element <label>, nadaj mu atrybut for "radio-work", textContent "Work"
// 8. Do diva id 'div-work' (pkt 5) podpinacie radio inputa z pkt 6 i label z pkt 7
// 9. Stwórz element <div> i nadaj mu id 'div-life'
// 10. Stwórz element <input>, nadaj mu type "radio", id "radio-life", name "category", value "life"
// 11. Stwórz element <label>, nadaj mu atrybut for "radio-life", textContent "Life"
// 12. Do diva id 'div-life' (pkt 9) podpinacie radio inputa z pkt 10 i label z pkt 11
// Powtórz tyle razy żeby finalnie powstały 4 radio inputy z value Work, Life, Sport i Education
// 13. Stwórz element <button>, nadaj mu type "submit", klasę "todo-form-submit-button", textContent "Add todo"
// 14. Do fieldseta podpinacie elementy legend, divWork, divLife, divSport, divEducation
// 15. Do form podpinacie input (pkt 2), fieldset, submit button
// 16. Cały formularz zwracacie returnem

export default function () {
    const form = document.createElement("form");
    form.setAttribute("id", "todo-form");

    const input1 = document.createElement("input");
    input1.setAttribute("id", "todo-input");

    const fieldset = document.createElement("fieldset");
    fieldset.setAttribute("id", "todo-fieldset");

    const legend = document.createElement("legend");
    legend.textContent = "Select a category";

// RadioButton WORK
    const div1 = document.createElement("div");
    div1.setAttribute("id", "div-work");

    const input2 = document.createElement("input");
    input2.setAttribute("type", "radio");
    input2.setAttribute("id", "radio-work");
    input2.setAttribute("name", "category");
    input2.setAttribute("value", "work");
    input2.setAttribute("checked", "true");

    const label2 = document.createElement("label");
    label2.setAttribute("for", "radio-work");
    label2.textContent = "WORK";

    div1.appendChild(input2);
    div1.appendChild(label2);

// RadioButton LIFE
    const div2 = document.createElement("div");
    div2.setAttribute("id", "div-life");

    const input3 = document.createElement("input");
    input3.setAttribute("type", "radio");
    input3.setAttribute("id", "radio-life");
    input3.setAttribute("name", "category");
    input3.setAttribute("value", "life");

    const label3 = document.createElement("label");
    label3.setAttribute("for", "radio-life");
    label3.textContent = "LIFE";

    div2.appendChild(input3);
    div2.appendChild(label3);

// RadioButton SPORT
const div3 = document.createElement("div");
    div3.setAttribute("id", "div-sport");

    const input4 = document.createElement("input");
    input4.setAttribute("type", "radio");
    input4.setAttribute("id", "radio-sport");
    input4.setAttribute("name", "category");
    input4.setAttribute("value", "sport");

    const label4 = document.createElement("label");
    label4.setAttribute("for", "radio-sport");
    label4.textContent = "SPORT";

    div3.appendChild(input4);
    div3.appendChild(label4);

// RadioButton EDUCATION
    const div4 = document.createElement("div");
    div4.setAttribute("id", "div-education");

    const input5 = document.createElement("input");
    input5.setAttribute("type", "radio");
    input5.setAttribute("id", "radio-education");
    input5.setAttribute("name", "category");
    input5.setAttribute("value", "education");

    const label5 = document.createElement("label");
    label5.setAttribute("for", "radio-education");
    label5.textContent = "EDUCATION";

    div4.appendChild(input5);
    div4.appendChild(label5);

// Element BUTTON
    const button = document.createElement("button");
    button.setAttribute("type", "submit");
    button.setAttribute("class", "todo-form-submit-button");
    button.textContent = "Add todo";

// Podpinanie do fieldseta
    fieldset.appendChild(legend);
    fieldset.appendChild(div1);
    fieldset.appendChild(div2);
    fieldset.appendChild(div3);
    fieldset.appendChild(div4);

//Podpinanie do form
    form.appendChild(input1);
    form.appendChild(fieldset);
    form.appendChild(button);

    return form;
}