<!DOCTYPE html>
<html>
<head>
    <title>Modal Example</title>
    <style>
        #modal {
            display: none;
            width: 1000px;
            height: 100%;
            background: rgba(0, 0, 0);
            justify-content: center;
        }
        .modal-content {
            background: white;
            text-align: center;
        }
    </style>
</head>
<body>

    <button id="openModalBtn">Open Modal</button>

    <div id="modal">
        <div class="modal-content">
            <h2>Modal</h2>
            <p>modal is open</p>
            <button id="closeModalBtn">close</button>
        </div>
    </div>

    <script>
        const openModalBtn = document.getElementById("openModalBtn");
        const closeModalBtn = document.getElementById("closeModalBtn");
        const modal = document.getElementById("modal");

        openModalBtn.addEventListener("click", function() {
            modal.style.display = "flex";
        });

        closeModalBtn.addEventListener("click", function() {
            modal.style.display = "none";
        });

        window.addEventListener("click", function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    </script>

</body>
</html>
