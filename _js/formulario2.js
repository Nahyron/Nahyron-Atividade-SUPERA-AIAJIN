function json() {
    var obj_form = {
        nome: "",
        idade: "",
        telefone: "",
        endereco: "",
        planeta: "",
        raça: "",
        choice: "",
        box: "",
        tam: "",
        obs: "",

    }



var el_nome = document.getElementById("nome");
obj_form.nome = el_nome.value;

var el_idade = document.getElementById("idade");
obj_form.idade = el_idade.value;

var el_telefone = document.getElementById("telefone");
obj_form.telefone = el_telefone.value;

var el_endereco = document.getElementById("endereco");
obj_form.endereco = el_endereco.value;

var el_planeta = document.getElementById("planeta");
obj_form.planeta = el_planeta.value;

var el_raça = document.getElementById("raça");
obj_form.raça = el_raça.value;

var el_choice = document.getElementById("choice");
obj_form.choice = el_choice.value;

var el_box = document.getElementById("box");
obj_form.box = el_box.value;

// tamanho do açai

var el_tam = document.getElementById("tam");
obj_form.tam = el_tam.value;

// observação

var el_obs = document.getElementById("obs");
obj_form.obs = el_obs.value;

var json = JSON.stringify(obj_form, null, "");
document.write("<h1>Dados para Json</h1>");
document.write(json)

}