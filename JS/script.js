function showtime(){
    var now= new Date();
    var time = now.toLocaleTimeString();
    document.getElementById("clock").innerHTML = time;
}

setInterval(showtime,1000);        

window.onload = function(){
    if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
        alert("مرحبا بك في الموقع");
    }
}
function closepopup() {
    const popup = document.getElementById("welcompoup");
    if (popup) {
        popup.style.display = "none";
    }
}

// 3. وظيفة تسجيل الدخول (لصفحة login.html)
function loginUser() {
    const email = document.getElementById("loginEmail").value;
    const pass = document.getElementById("loginPass").value;

    if (email === "" || pass === "") {
        alert("⚠️ يرجى تعبئة جميع الحقول");
    } else {
        alert("تم تسجيل الدخول بنجاح ✅");
        // window.location.href = "index.html"; // تفعيل التحويل بعد النجاح
    }
}

// 4. وظيفة التحقق من فورم التواصل (لصفحة contact.html)
function checkForm() {
    const name = document.getElementsByName("name")[0].value;
    const email = document.getElementById("userEmail").value;

    if (name === "" || email === "") {
        alert("⚠️ يرجى إدخال الاسم والبريد الإلكتروني على الأقل");
    } else {
        alert("✅ شكراً لتواصلك معنا، سنرد عليك قريباً!");
    }
}

var currentzoom = 1;

function zoomIn(){
    currentzoom += 0.1;
    // التكبير للمحتوى الرئيسي فقط لضمان ثبات شريط الأدوات
    var main = document.querySelector('main');
    if(main) {
        main.style.transform = "scale(" + currentzoom + ")";
        main.style.transformOrigin = "top center";
    }
}

function zoomOut(){
    if (currentzoom > 0.5) {
        currentzoom -= 0.1;
        var main = document.querySelector('main');
        if(main) {
            main.style.transform = "scale(" + currentzoom + ")";
            main.style.transformOrigin = "top center";
        }
    }
}

function changeTheme(){
    var selectedColor=document.getElementById("bgPicker").value;
    document.body.style.backgroundColor=selectedColor;
    document.body.style.color="#4c4444";
}

function checkForm() {
    var email = document.getElementById("userEmail").value;
    var message = document.getElementById("userMsg").value;
    var phone = document.getElementById("usertel").value;

    if ( email== "" || !email.includes("@") || message=="" || phone.length < 10){
        alert ("يرجى ملء جميع الخانات اولا");
    }
    else{
        alert("شكرا لك تم ارسال رسالتك بنجاح");
        document.getElementById("contactform").reset();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const bookButtons = document.querySelectorAll('.book-btn');

    bookButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const card = this.closest('.package-card');
            const packageName = card.querySelector('.card-header').innerText;

            var userConfirmation = confirm("هل انت متأكد من رغبتك فى اختيار " + packageName + "؟");

            if (userConfirmation) {
                alert("شكرا لاختيارك " + packageName + " سيتم توجيهك الان لصفحة الاتصال لتأكيد الحجز");
                window.location.href = "contact.html";
            } else {
                alert("يمكنك تصفح بقية الحزم واختيار ما يناسبك");
            }
        });
    });
});
function confirmchoice() {
    // تظهر رسالة تأكيد للمستخدم
    var response = confirm("هل تريد الاتنقال الى الصفحه التاليه لمعرفه المزيد");

    // إذا ضغط المستخدم على "موافق" (OK)
    if (response == true) {
        window.location.href = "about.html";
    } 
    // إذا ضغط على "إلغاء" لن يحدث شيء وسيبقى في نفس الصفحة
}