<template>
    <div class="area"></div>
    <nav class="main-menu">
        <ul>
            <li>
                <router-link to="/unidades">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-buildings" viewBox="0 0 16 16">
                        <path
                            d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022M6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z" />
                        <path
                            d="M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z" />
                    </svg>
                    <span class="nav-text">
                        Unidade
                    </span></router-link>
            </li>
            <li>
                <router-link to="/clientes">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                    </svg>
                    <span class="nav-text">
                        Cliente
                    </span></router-link>
            </li>
            <li>
                <router-link to="/clientes">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-flag"
                        viewBox="0 0 16 16">
                        <path
                            d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12 12 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A20 20 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a20 20 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21 21 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21 21 0 0 0 14 7.655V1.222z" />
                    </svg>
                    <span class="nav-text">
                        Relatorios
                    </span></router-link>
            </li>
            <li>
                <router-link to="#">
                    <div class="btn-group">
                        <button type="button" class=" ajust btn dropdown-toggle" data-bs-toggle="dropdown"
                            style="display: flex; width: 255px;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-bus-front" viewBox="0 0 16 16">
                                <path
                                    d="M5 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0m8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-6-1a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm1-6c-1.876 0-3.426.109-4.552.226A.5.5 0 0 0 3 4.723v3.554a.5.5 0 0 0 .448.497C4.574 8.891 6.124 9 8 9s3.426-.109 4.552-.226A.5.5 0 0 0 13 8.277V4.723a.5.5 0 0 0-.448-.497A44 44 0 0 0 8 4m0-1c-1.837 0-3.353.107-4.448.22a.5.5 0 1 1-.104-.994A44 44 0 0 1 8 2c1.876 0 3.426.109 4.552.226a.5.5 0 1 1-.104.994A43 43 0 0 0 8 3" />
                                <path
                                    d="M15 8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1V2.64c0-1.188-.845-2.232-2.064-2.372A44 44 0 0 0 8 0C5.9 0 4.208.136 3.064.268 1.845.408 1 1.452 1 2.64V4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v3.5c0 .818.393 1.544 1 2v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V14h6v1.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2c.607-.456 1-1.182 1-2zM8 1c2.056 0 3.71.134 4.822.261.676.078 1.178.66 1.178 1.379v8.86a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 11.5V2.64c0-.72.502-1.301 1.178-1.379A43 43 0 0 1 8 1" />
                            </svg>
                            <span class="nav-text" style="width: 0; margin-top: 5px;">
                                Transportes
                            </span>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end" style="background: #535355; width: 255px;">
                            <li><router-link to="#" style="display: flex;">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-car-front-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679q.05.242.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.8.8 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17s3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z" />
                                    </svg>
                                    <span class="nav-text" style="width: 0; margin-top: 5px;">
                                        Veiculos
                                    </span>
                                </router-link></li>
                            <li><router-link to="#" style="display: flex;">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-credit-card-2-front" viewBox="0 0 16 16">
                                        <path
                                            d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
                                        <path
                                            d="M2 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5" />
                                    </svg>
                                    <span class="nav-text" style="width: 0; margin-top: 5px;">
                                        Cards
                                    </span>
                                </router-link></li>

                        </ul>
                    </div>

                </router-link>
            </li>

        </ul>

    </nav>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Nav_Aside',
});
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Titillium+Web:300);

.bi {
    position: relative;
    display: table-cell;
    width: 60px;
    height: 30px;
    text-align: center;
    vertical-align: middle;
    margin-top: 3px;
}

.btn:focus {
    box-shadow: none;
}

.dropdown-toggle::after {
    margin-left: 125px;
    margin-top: 15px;
}

.dropdown-menu {
    min-width: inherit;
    margin: 0;
    border: 0;
    border-radius: none;
}

.main-menu:hover,
nav.main-menu.expanded {
    width: 255px;
    overflow: visible;
}

.main-menu,
.btn {
    background: #282a3c;
    position: absolute;
    top: 0;
    bottom: 0;
    height: 100%;
    left: 0;
    width: 60px;
    overflow: hidden;
    -webkit-transition: width .05s linear;
    transition: width .05s linear;
    -webkit-transform: translateZ(0) scale(1, 1);
    z-index: 1000;
}

.ajust {
    height: 36px;
    margin: 0;
    padding: 0;
}


.main-menu>ul {
    margin: 7px 0;
}

.main-menu li {
    position: relative;
    display: block;
    width: 255px;
    margin-top: 10px;
}

.btn,
.main-menu li>a {
    position: relative;
    display: table;
    border-collapse: collapse;
    border-spacing: 0;
    color: #999;
    font-family: arial;
    font-size: 14px;
    text-decoration: none;
    -webkit-transform: translateZ(0) scale(1, 1);
    -webkit-transition: all .1s linear;
    transition: all .1s linear;

}

.main-menu .nav-icon {
    position: relative;
    display: table-cell;
    width: 60px;
    height: 36px;
    text-align: center;
    vertical-align: middle;
    font-size: 18px;
}

.main-menu .nav-text {
    position: relative;
    display: table-cell;
    vertical-align: middle;
    width: 190px;
    font-family: 'Titillium Web', sans-serif;
}


.no-touch .scrollable.hover {
    overflow-y: hidden;
}

.no-touch .scrollable.hover:hover {
    overflow-y: auto;
    overflow: visible;
}

a:hover,
a:focus {
    text-decoration: none;
}

nav {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
}

nav ul,
nav li {
    outline: 0;
    margin: 0;
    padding: 0;
}

.btn:hover,
.main-menu li:hover>a,
nav.main-menu li.active>a,
.dropdown-menu>li>a:hover,
.dropdown-menu>li>a:focus,
.dropdown-menu>.active>a,
.dropdown-menu>.active>a:hover,
.dropdown-menu>.active>a:focus,
.no-touch .dashboard-page nav.dashboard-menu ul li:hover a,
.dashboard-page nav.dashboard-menu ul li.active a {
    color: #fff;
    background-color: #000000;
    width: 100%;
    height: 36px;
}

.area {
    float: left;
    background: #e2e2e2;
    width: 100%;
    height: 100%;
}

@font-face {
    font-family: 'Titillium Web';
    font-style: normal;
    font-weight: 300;
    src: local('Titillium WebLight'), local('TitilliumWeb-Light'), url(http://themes.googleusercontent.com/static/fonts/titilliumweb/v2/anMUvcNT0H1YN4FII8wpr24bNCNEoFTpS2BTjF6FB5E.woff) format('woff');
}</style>