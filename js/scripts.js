const TYPING_SPEED = 65

function randomInRange(start, end) {
    return Math.floor(Math.random() * (end - start + 1) + start);
}

function renderTypeWriterText(text, selector, speed, resolve, index = 0) {
    if (index != text.length) {
        document.querySelector(selector).innerHTML += text.charAt(index);
        setTimeout(
            renderTypeWriterText,
            speed += randomInRange(-5, 3),
            text,
            selector,
            speed,
            resolve,
            ++index,
        );
    } else {
        resolve();
    }
}

const hello = document.createElement("div");
hello.className = "hello";
document.body.appendChild(hello);

let helloRender = new Promise((resolve, _) => {
    renderTypeWriterText(
        text = "Привет! Меня зовут Илья",
        selector = ".hello",
        speed = TYPING_SPEED,
        resolve,
    );
});


helloRender.then(() => {
    const developer = document.createElement("div");
    developer.className = "developer";
    document.body.appendChild(developer)

    let developerRender = new Promise((resolve, _) => {
        setTimeout(
            renderTypeWriterText,
            speed = 500,
            text = "Я являюсь спортивным массажистом",
            selector = ".developer",
            speed = TYPING_SPEED,
            resolve,
        );
    });

    developerRender.then(() => {
        const aboutMe = document.createElement("div");
        aboutMe.className = "about-me";
        document.body.appendChild(aboutMe);


        let aboutRender = new Promise((resolve, _) => {
            setTimeout(
                renderTypeWriterText,
                speed = 500,
                text = "my contacts",
                selector = ".about-me",
                speed = TYPING_SPEED,
                resolve,
            );
        });

        aboutRender.then(() => {

            const linksMapping = [
                ["static/opengl.png", ""],
                ["static/tg.png", "https://t.me/ilya_bagrov"],
                ["static/opengl.png", ""],
                ["static/gh.png", "https://github.com/Ilya-massage"],
                ["static/opengl.png", ""],
                ["static/ig.png", "https://instagram.com/bagrov_health"],
                ["static/opengl.png", ""],
                ["static/vk.png", "https://vk.com/ilya__massage"],
                ["static/opengl.png", ""],
            ];

            const links = document.createElement("div");
            links.className = "links";
            document.body.appendChild(links);

            let linksRender = new Promise((resolve, _) => {
                function recursive(index = 0) {
                    if (index != linksMapping.length) {
                        links.innerHTML +=
                            `<a href="${linksMapping[index][1]}"><img src="${linksMapping[index][0]}"></a>`;
                        setTimeout(recursive, 120, ++index);
                    } else {
                        resolve();
                    }
                };
                recursive();
            });

            linksRender.then(() => {
                const writeMe = document.createElement("a");
                writeMe.className = "write-me";
                writeMe.href = "https://mail.google.com/rashid1995bik@gmail.com";
                document.body.appendChild(writeMe);

                setTimeout(
                    renderTypeWriterText,
                    speed = 300,
                    text = "по всем вопросам, прощу обращаться по контактам указанным ниже!",
                    selector = ".write-me",
                    speed = TYPING_SPEED,
                    () => { },
                );
            });
        });
    });
});
