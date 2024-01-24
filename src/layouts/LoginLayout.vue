<template>
  <q-layout view="lHh LpR lFf">
    <q-page-container>
      <div>
        <div
          class="accountbg"
          :style="{
            'background-size': 'cover',
            'background-position': 'center',
          }"
        ></div>
        <div class="wrapper-page account-page-full">
          <q-card no-body class="shadow-none">
            <div class="card-block">
              <div class="account-box">
                <div class="card-box shadow-none p-4">
                  <div class="p-2">
                    <div class="text-center mt-4">
                      <router-link to="/">
                        <img
                          src="src/assets/images/logo_bekasi.png"
                          width="100px"
                          alt="logo"
                        />
                      </router-link>
                    </div>

                    <h4 class="font-size-18 mt-5 text-center">
                      Welcome Back !
                    </h4>
                    <p class="text-muted text-center">
                      Sign in to continue to eSuketi (Surat Keterangan Tanda
                      Bukti).
                    </p>
                    <div class="container">
                      <q-form class="form" action="/cms/dashboard">
                        <div class="mb-3">
                          <label class="form-label" for="username"
                            >Surat Elektronik/Email</label
                          >
                          <q-input
                            type="text"
                            id="username"
                            placeholder="Enter username"
                          />
                        </div>

                        <div class="mb-3">
                          <label class="form-label" for="userpassword"
                            >Password</label
                          >
                          <q-input
                            type="password"
                            id="userpassword"
                            placeholder="Enter password"
                          />
                        </div>

                        <div class="text-end q-mt-md" align="right">
                          <q-btn
                            outline
                            color="primary"
                            class="px-4 py-2"
                            @click="login"
                            >Log In</q-btn
                          >
                        </div>

                        <div class="form-group mt-2 mb-0 row" align="right">
                          <q-col cols="12" class="mt-3">
                            <router-link to="/pages/recoverpwd-2">
                              <i class="mdi mdi-lock"></i> Forgot your password?
                            </router-link>
                          </q-col>
                        </div>
                      </q-form>
                    </div>
                    <div class="mt-5 pt-4 text-center">
                      <p>
                        Don't have an account ?
                        <router-link
                          to="/pages/register-2"
                          class="fw-medium text-primary"
                          >Signup now</router-link
                        >
                      </p>
                      <p>
                        ©
                        {{ new Date().getFullYear() }}
                        Veltrix. Crafted with
                        <i class="mdi mdi-heart text-danger"></i> by Themesbrand
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </q-card>
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>
<script>
import { useRouter } from "vue-router";
import { useAuthStore } from "src/stores/auth";

export default {
  name: "LoginLayout",

  setup() {
    const router = useRouter();
    const auth = useAuthStore();

    //buatkan array user, roles, token dummy
    const res = {
      data: {
        user: {
          id: 1,
          name: "Denny Rismanto",
          email: "admin@email.com",
          password: "",
          created_at: "",
          updated_at: "",
        },
        roles: ["superadmin"],
        token: "dsandonasd",
      },
    };
    const login = () => {
      auth.login(res.data.user, res.data.roles, res.data.token);
      router.push("/cms/dashboard");
    };
    return {
      login,
    };
  },
};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.form {
  padding: 20px;
  width: 50%;
}
@media screen and (max-width: 600px) {
  .form {
    width: 100%;
  }
}
</style>
