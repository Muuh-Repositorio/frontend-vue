import { Options, Vue } from "vue-class-component";
import ProfileInput from '../profile-input/ProfileInput.vue'

@Options({
    name: "ProfileCard",
    components: { ProfileInput }
})
export default class ProfileCard extends Vue {}