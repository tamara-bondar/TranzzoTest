let sendSelect = document.getElementById("send_select");
let getSelect = document.getElementById("get_select");

let sendSelectValue = sendSelect.value;
let getSelectValue = sendSelect.value;


let ResetSelect = () => {
  document.getElementsByClassName("select-selected")[1].remove()
  document.getElementsByClassName("select-items")[1].remove()
  document.getElementsByClassName("select-selected")[0].remove()
  document.getElementsByClassName("select-items")[0].remove()
  updateSelects()
}

let sendSelectChange = (val) => {
  sendSelectValue = val;
  sendSelect.value = val;

  for(let i = 0; i < getSelect.options.length; i++) {
    let option = getSelect.options[i];
    if (option.disabled) {
      option.disabled = false
    }
    if (option.value === sendSelectValue) {
      option.disabled = true
    }
  }

  ResetSelect()
};

let getSelectChange = (val) => {
  getSelectValue = val;
  getSelect.value = val;
  for(let i = 0; i < sendSelect.options.length; i++){
    let option = sendSelect.options[i];
    if(option.disabled) {
      option.disabled = false
    }
    if (option.value === getSelectValue){
      option.disabled = true
    }
  }

  ResetSelect()
};

let ResetDisabled = (select) => {
  for(let i = 0; i < select.length; i++) {
    let option = select.options[i];

    if(option.disabled) {
      option.disabled = false
    }
  }
};

let ChangeSelectBtn = (id) => {
  ResetDisabled(sendSelect);
  ResetDisabled(getSelect);
  sendSelect.selectedIndex = 1;
  getSelect.options[1].disabled = true;

  getSelect.selectedIndex = id+1;
  sendSelect.options[id+1].disabled = true

  ResetSelect()
};


