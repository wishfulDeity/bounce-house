<script>
    import contactInfo from "$lib/data/contactInfo.json";

    let email = contactInfo[0].email;
</script>

<slot />

<div class="flex">
    <a class="contact-button" href="mailto:{email}?subject=Customer Inquiry">Questions? Click here to send us an email at {email}!</a>
</div>

<style>
    @import "$lib/styles/base.scss";
</style>