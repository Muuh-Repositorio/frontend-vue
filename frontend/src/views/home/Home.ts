import { Options, Vue } from "vue-class-component";

@Options({
    name: "Home"
})
export default class Home extends Vue {
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

    mounted(): void {
        this.bossLogoAnimation()
        this.welcomeTextAnimation()
    }
}
