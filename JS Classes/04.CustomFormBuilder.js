class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }
    createForm(container) {
        const form = document.createElement("form");
        this.fields.forEach(field => {
            const label = document.createElement("label");
            label.textContent = field.label;
            const input = document.createElement("input");
            input.type = field.type;
            input.name = field.name;
            input.placeholder = field.label;
            input.required = true;
            label.appendChild(input);
            form.appendChild(label);
            form.appendChild(document.createElement("br"));
            form.appendChild(document.createElement("br"));
        });
        const button = document.createElement("button");
        button.type = "submit";
        button.textContent = "Submit";
        form.appendChild(button);
        form.addEventListener("submit", event => {
            event.preventDefault();
            console.log(this.getFormData(form));
        });
        container.appendChild(form);
    }
    getFormData(form) {
        const data = {};
        this.fields.forEach(field => data[field.name] = form.elements[field.name].value);
        return data;
    }
}
document.body.innerHTML = "<h2>Dynamic Form</h2><div id='formContainer'></div>";
const fields = [
    { type: "text", label: "Username", name: "username" },
    { type: "email", label: "Email", name: "email" },
    { type: "password", label: "Password", name: "password" }
];
new FormBuilder(fields).createForm(document.getElementById("formContainer"));
