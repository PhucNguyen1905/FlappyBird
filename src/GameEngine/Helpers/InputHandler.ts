import { SceneManager } from "../SceneManager";

export class InputHandler {
    queue: string[] = [];
    callbacks: { [key: string]: [[string, Function]] } = {};
    sceneManager!: SceneManager;

    constructor() {
        this.listenEvent();
    }

    private listenEvent() {
        window.addEventListener('keydown', (e) => {
            if (e.code == 'Space') {
                this.queue.push('Space');
            }
            if (e.code == 'Enter') {
                this.queue.push('Enter');
            }
        })
    }
    enQueue(event: string): void {
        this.queue.push(event);
    }
    processInput() {
        for (const key of this.queue) {
            console.log(this.queue)
            console.log(this.callbacks)
            this.callbacks[key].forEach(c => {
                if (c[0] == this.sceneManager.getCurrentName()) {
                    c[1]();
                }
            });
        }
        this.queue = [];
    }
    onSpaceDown(callback: Function, sceneName: string) {
        this.callbacks['Space'] = this.callbacks['Space'] || [];
        this.callbacks['Space'].push([sceneName, callback]);
    }
    onEnterDown(callback: Function, sceneName: string) {
        this.callbacks['Enter'] = this.callbacks['Enter'] || [];
        this.callbacks['Enter'].push([sceneName, callback]);
    }
    onClickBtn(callback: Function, sceneName: string) {
        this.callbacks['Click'] = this.callbacks['Click'] || [];
        this.callbacks['Click'].push([sceneName, callback]);
    }

    getButtonClick(x: number, y: number, x1: number, y1: number, w: number, h: number): boolean {
        if (x >= x1 && x <= x1 + w && y >= y1 && y <= y1 + h) {
            return true;
        }
        return false;
    }

}