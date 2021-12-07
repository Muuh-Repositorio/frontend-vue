import store from "@/store";
import { Options, Vue } from "vue-class-component";

@Options({
    name: "Home"
})
export default class Home extends Vue {
    user = store.getters.getUser

    bossLogoAnimation(): void {
        const image: any = document.querySelector('#logo');
        window.addEventListener('scroll' , () => {
            let value = window.scrollY;
            image.style.transform = 'rotate('+value+'deg)';
        });
    }

    welcomeTextAnimation(): void {
        const text: any = document.getElementById('bem-vindo');
        window.addEventListener('scroll' , () => {
            text.style.left = 7 + '%';
            text.style.opacity = 1;
        });
    }

    aboutAnimation(): void {
        const titleLine: any = document.getElementById('title-line');
        const height = window.innerHeight;
        console.log(height)
        window.addEventListener('scroll' , ()=>{
            const offset = parseFloat(window.pageYOffset.toFixed(2));
            console.log(offset)
            if(offset + 0.4 === height){
                console.log('ok');
                titleLine.style.display = 'block';
            }
        })
    }

    mounted(): void {
        this.bossLogoAnimation()
        this.welcomeTextAnimation()
        this.aboutAnimation()
    }
}
