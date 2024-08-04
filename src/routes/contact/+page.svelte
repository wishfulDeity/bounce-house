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
<p></p>
