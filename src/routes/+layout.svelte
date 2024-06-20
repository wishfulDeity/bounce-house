<script>
    import { doDropDown } from "$lib/ui";
</script>

<div class="nav-container">
    <a href="/">
        <img src='$lib/images/logos/bouncehouselogo_wide.png' alt="The Bounce House logo">
    </a>
    <nav>
        <a class="navbutton" href="/">Home</a>
        <div class="dropdown">
            <button class="navbutton" on:click={doDropDown()}>Contact us</button>
            <div id="contact-dropdown" class="dropdown-content">
                <a class="navbutton" href="/rentals">Rentals</a>
                <a class="navbutton" href="/development">Development</a>
            </div>
        </div>
</nav>
</div>

<slot></slot>


<style>
    @import "$lib/styles/base.scss";
</style>