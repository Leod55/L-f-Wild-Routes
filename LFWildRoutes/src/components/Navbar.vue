<script>
import { RouterLink } from 'vue-router'
</script>

<template>

    <nav class="col-12">
        <ul>
            <li><RouterLink to="/">HOME</RouterLink></li>
            <li><RouterLink to="/destinations">DESTINATIONS</RouterLink></li>
            <li><RouterLink to="/newtrip">NEWTRIP</RouterLink></li>
            <li><RouterLink to="/login">LOGIN</RouterLink></li>
            <li><RouterLink to="/who">WHO</RouterLink></li>
        </ul>
    </nav>
    
</template>

<style>


nav li{
   list-style-type: none;
   display: inline-block;
   padding-left: 20px;
   padding-right: 20px;
   border-left: 2px solid var(--black);
}

nav li:first-child{
    border-left: none;
}

nav li > a{
    color: var(--black);
}

a:link{
    text-decoration: none;
    font-size: 15px;
}

a:hover{
    font-weight: bold;
    font-size: 16px;
    color: var(--secondary);
}
    
</style>
