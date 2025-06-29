import { observable} from 'mobx';

export default class DashboardStore {
    @observable dashboard;

    constructor() {
        this.dashboard = 'basic';
    }

    changeDashboard(newDashboard) {
        this.dashboard = newDashboard;
    }
}
