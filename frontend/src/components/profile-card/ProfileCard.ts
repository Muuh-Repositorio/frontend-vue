import { Options, Vue } from "vue-class-component";
import ProfileInput from '../profile-input/ProfileInput.vue'

@Options({
    name: "ProfileCard",
    components: { ProfileInput },
    props: [ 'cow' ]
})
export default class ProfileCard extends Vue {
    edit = false
    buttonText = 'Editar'

    edit_() {
        this.edit = !this.edit
        this.buttonText = this.edit ? 'Salvar' : 'Editar'
    }
}