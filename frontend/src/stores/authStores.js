import { defineStore } from "pinia"
import { ref } from "vue"
import axiosInstance from '@/restapi/api'
import { useRouter } from "vue-router"

export const useAuthStore = defineStore('user', () => {
    const VisibleLoginDialog = ref(false)
    const errMsg = ref(null)
    const isError = ref(false)
    const currentUser = ref(localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null)
    const router = useRouter()

    const userLogin = async (req) => {

        try {
            const { data } = await axiosInstance.post('/auth/login', {
                email: req.email.toLowerCase(),
                password: req.password.toLowerCase()
            })
            
            currentUser.value = data.data
            localStorage.setItem("user", JSON.stringify(data.data))

            console.log(data)
            VisibleLoginDialog.value = false

            router.push({name: 'home'})

        } catch (error) {

            if(isError.value === true) {
                return false;
            }

            isError.value = true
            errMsg.value = error.response.data.message

            setTimeout(() => {      
                isError.value = false
            }, 2500);
            
            console.log(error)
        }
        
    }

    const handeRegister = () => {
        
    }


    const handleLogout = async () => {
        try {

            
            localStorage.setItem("user", null)
            currentUser.value = null
            await axiosInstance.get('/auth/logout')

            window.location.href="/"


        } catch (error) {
            console.log(error)
        }
    }

    return { VisibleLoginDialog, userLogin, errMsg, isError, currentUser, handleLogout }
  })