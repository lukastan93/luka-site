---
layout: contact
title: Contact Me \| Luka Stanojevic
---
<img class="bulb" src="assets/images/bulb.png">
<form id="form" class="form" action="contactform.php" method="post">
    <h1 class="form-title">got an idea?</h1>
    <fieldset class="form__information">
        <label for="name" class="form__item">
            <span class="form__instruction">name</span>
            <input class="form__to-fill"
                   type="text" name="name" id="name"
                   placeholder="nikola tesla">
            <span class="form__animation"></span>
        </label>
        <label for="email" class="form__item">
            <span class="form__instruction">email</span>
            <input class="form__to-fill"
                   type="email" name="email" id="email"
                   placeholder="nikky.t@acmail.com">
            <span class="form__animation"></span>
        </label>
        <label for="message" class="form__item form__item--top">
            <span class="form__instruction">message</span>
            <textarea class="form__to-fill form__to-fill--textarea"
                      name="message" id="message"
                      placeholder="this invention i have in mind is gonna be lit"></textarea>
            <span class="form__animation"></span>
        </label>
    </fieldset>
    <fieldset class="form__bottom">
        <button class="form__submit"
                type="submit" name="submit">submit</button>
    </fieldset>
</form>