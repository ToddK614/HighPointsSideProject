<!-- Main Application Template. 
     Note that you have classes from bootstrap available to you.
     See https://getbootstrap.com/docs/4.5/getting-started/introduction/ for reference on bootstrap -->
     <template>
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-light"> <!-- each space indicates a new class tag-->
          <img class="logo-img" src='@/assets/Logo.png'/>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <router-link class="nav-item active" v-bind:to="{ name: 'home' }">
                  <!--v-if="$store.state.token"-->
                  <i class="fas fa-home"></i> <!--font awesome-->
                    Home
                </router-link>
              </li>
              <li class="nav-item active">
                <router-link class="nav-item active" v-bind:to="{ name: 'highPointList' }"
                  v-if="$store.state.token">
                  <i class="fas fa-mountain"></i>
                    All US High Points
                </router-link>
              </li>
              <li class="nav-item active">
                <router-link class="nav-item active" v-bind:to="{ name: 'topfive' }">
                  <!--v-if="$store.state.token"-->
                  <i class="fas fa-mountain"></i>
                    Top Five US High Points!
                </router-link>
              </li>
            </ul>
            <div>
              <router-link v-bind:to="{ name: 'addhighpoint' }">
                <button class="btn btn-outline-success my-2 my-sm-0" >Add High Point</button>
              </router-link>
            </div>
          </div>
        </nav>
          <router-view />
          </div>
          </template>
          
    
    <script>
    export default {
      
    }
    </script>
    
    <!-- Application-Wide Styles go here. 
         Any valid CSS or SCSS is allowable here. See https://sass-lang.com/documentation/style-rules for info on SCSS -->
    <style lang="scss">
    
    @import './styles/colors.scss';
    
    // Import the bootstrap styles. If you want to override Bootstrap colors, it needs to happen above this line
    @import '../node_modules/bootstrap/scss/bootstrap';
    
    // Your custom styles go below this point
    
    body {
      margin-top: 0px;
      background-image: url("assets/HP_Mainv2.png"); 
      background-size: cover;
      background-repeat: no-repeat;
      
    }
    
    img.logo-img {
      width: 10%;
      padding-right: 20px;
    }
    
    a.nav-item.active {
      margin-right: 20px;
      color: red
    }
    
    nav.navbar.navbar-expand-lg.navbar-dark.bg-light {
      padding-left: 50px;
      opacity: .80
    }
    
    button.btn.btn-outline-success.my-2.my-sm-0 {
        position: absolute;
        right: 40px;
        top: 20px;
        background-color: white !important;
        border-color: #0aaae1 !important;
        
        
    }
    
    
    </style>