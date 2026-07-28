// بوابة المحقق الرقمي - المساعد الذكي

function openAI() {
    document.getElementById("aiBox").style.display = "block";
}

function closeAI() {
    document.getElementById("aiBox").style.display = "none";
}


function sendMessage() {

    let input = document.getElementById("userInput");
    let chat = document.getElementById("chat");

    let question = input.value.trim();

    if (question === "") {
        return;
    }


    // عرض سؤال المستخدم
    chat.innerHTML += `
    <p>
    👤 ${question}
    </p>
    `;


    // رد المساعد (نسخة تجريبية)
    let answer = getAIResponse(question);


    chat.innerHTML += `
    <p>
    🤖 ${answer}
    </p>
    `;


    input.value = "";

    chat.scrollTop = chat.scrollHeight;
}


// قاعدة معرفة أولية للمساعد
function getAIResponse(question) {

    question = question.toLowerCase();


    if (question.includes("سيبراني") || question.includes("اختراق")) {

        return "الأمن السيبراني هو حماية الأنظمة والشبكات والبيانات من الهجمات الإلكترونية.";

    }


    if (question.includes("تحقيق") || question.includes("رقمي")) {

        return "التحقيق الرقمي يعتمد على جمع وتحليل الأدلة الإلكترونية بطريقة قانونية.";

    }


    if (question.includes("osint")) {

        return "OSINT هو جمع المعلومات المتاحة علناً من المصادر المفتوحة وتحليلها.";

    }


    if (question.includes("مرحبا") || question.includes("السلام")) {

        return "أهلاً بك في بوابة المحقق الرقمي. كيف يمكنني مساعدتك؟";

    }


    return "أنا مساعد بوابة المحقق الرقمي. سيتم تطوير قدراتي وربطي بالذكاء الاصطناعي المتقدم قريباً.";
}
