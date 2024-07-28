<script>
    let showDropdown = false;

    function toggleDropdown() {
        showDropdown = !showDropdown;
    }
</script>

<div class="nav-container">
    <a href="/">
        <img
            src="$lib/images/logos/bouncehouselogo_wide.png"
            alt="The Bounce House logo"
        />
    </a>
    <nav>
        <a class="navbutton" href="/">Home</a>
        <a class="navbutton" href="/contact">Contact us</a>
        <!--
            Up and down pointing arrows for future use:
            ▲
            ▼
        -->
        <a
            href={null}
            class="navbutton"
            on:click={toggleDropdown}
        >
            {#if showDropdown}
                Catalog ▲
            {:else}
                Catalog ▼
            {/if}
        </a>
        {#if showDropdown}
            <div class="dropdown-content">
                <a href="/rentals" on:click={toggleDropdown}>
                    Rentals
                </a>
                <a href="/the-rat-dimension" on:click={toggleDropdown}>
                    
                </a>
                <a href="/development" on:click={toggleDropdown}>
                    Development
                </a>
            </div>
        {/if}
    </nav>
</div>