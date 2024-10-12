function themTourMoi() {
    const imageUpload = document.getElementById('imageUpload');
    const imagePreview = document.getElementById('imagePreview');
    var selectedImages = [];
    console.log("ok")
    imageUpload.addEventListener('change', function (event) {
        const files = event.target.files;
        console.log("ok")

        imagePreview.innerHTML = '';

        if (files.length > 0) {
            Array.from(files).forEach((file, index) => {
                if (file.type.startsWith('image/')) {
                    const reader = new FileReader();
                    reader.onload = function (e) {
                        const imageContainer = document.createElement('div');
                        imageContainer.classList.add('image-container');
                        imageContainer.dataset.index = index;

                        const img = document.createElement('img');
                        img.src = e.target.result;
                        img.classList.add('thumbnail');

                        const removeButton = document.createElement('button');
                        removeButton.classList.add('btn', 'btn-danger', 'btn-sm', 'remove-btn');
                        removeButton.innerText = 'x';
                        removeButton.addEventListener('click', function () {
                            removeImage(index);
                        });

                        imageContainer.appendChild(img);
                        imageContainer.appendChild(removeButton);
                        imagePreview.appendChild(imageContainer);

                    };
                    reader.readAsDataURL(file);
                    selectedImages.push(file);
                }
            });
        }
    });

    function removeImage(index) {
        selectedImages.splice(index, 1);
        const imageContainer = document.querySelector(`.image-container[data-index="${index}"]`);
        imageContainer.remove();
    }
    var selectedValue = [];
    const displayElement = document.getElementById('site-selected');
    document.getElementById('destination-select').addEventListener('change', function () {

        selectedValue.push(this.value + ' ');
        if (selectedValue) {
            const removeButton = document.createElement('button');
            displayElement.innerHTML = `<p>Điểm dừng đã chọn: ${selectedValue}</p>`;
            removeButton.addEventListener('click', function () {
                removeSite(index);
            });
        } else {
            displayElement.innerHTML = '';
        }
    });
}

