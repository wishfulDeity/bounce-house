<script>
    import Navbar from "$lib/Navbar.svelte";
    import contactInfo from "$lib/data/contactInfo.json";

    let contact = contactInfo[0];
</script>

<svelte:head>
    <title>Contact</title>
</svelte:head>

<Navbar />

<h1>Contact us</h1>

<h3>Contact info:</h3>
<p>{contact.name}</p>
{#each contact.address as line}
<p>{line}</p>
{/each}
<p>PH: {contact.phone}</p>
<p>FAX: {contact.fax}</p>
<p>EMAIL: {contact.email}</p>
<p>WEB: {contact.web}</p>
