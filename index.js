var dropper = document.querySelector('#drop');
var result = document.querySelector('#results');
var fileInput = document.querySelector('#fileInput');
var txt = document.querySelector('textarea');

("dragenter dragover dragleave".split(" ")).forEach((event) => {
    dropper.addEventListener(event,(e) => e.preventDefault())
})

dropper.ondrop = (e) => {
    console.log('in on drop');
    console.log(e.dataTransfer.files)
    var files = [].slice.call(e.dataTransfer.files);
    files.forEach(function(file) {
        readFile(file)
    });
    e.preventDefault();
}

fileInput.onchange = (e) => {
    var file = fileInput.files[0];
    readFile(file);
    e.preventDefault();
}

function readFile(file){
    //if(file.type.match(/image.*/)) {
        var reader = new FileReader();
        reader.onload = (event) => {
            txt.value = reader.result
            var image = new Image();
            image.height = 100;
            image.title = file.name;
            image.src = reader.result;
            result.insertBefore(image,txt);
            txt.style.display = "block";
        }
        reader.readAsDataURL(file);
    //}
}