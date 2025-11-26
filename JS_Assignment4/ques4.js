class FormBuilder {
  constructor(fields) {
    this.fields = fields;
  }

  renderForm() {
    let formHTML = "<form id='dynamicForm'>";
    this.fields.forEach(f => {
      formHTML += `<label>${f.label}</label><input type="${f.type}" name="${f.label}"><br>`;
    });
    formHTML += "<button type='submit'>Submit</button></form>";
    document.body.innerHTML = formHTML;
  }

  getFormData() {
    const data = {};
    this.fields.forEach(f => {
      data[f.label] = document.querySelector(`[name='${f.label}']`).value;
    });
    return data;
  }
}

const fb = new FormBuilder([{type:'text',label:'Username'},{type:'email',label:'Email'}]);
fb.renderForm();
