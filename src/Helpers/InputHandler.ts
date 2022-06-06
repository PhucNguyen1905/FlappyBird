
export class InputHandler {
    public static queue: [{ [key: string]: Function }]
    constructor() {
        InputHandler.queue = [{}];
        InputHandler.queue.shift();
    }

    static enQueue(key: string, callback: Function): void {
        InputHandler.queue.push({ [key]: callback });
    }
    processInput() {
        while (InputHandler.queue.length > 0) {
            let ele: { [key: string]: Function } = InputHandler.queue.shift()!;
            Object.values(ele)[0]();
        }
    }

    getSpacePress(): boolean {
        document.addEventListener('keyup', event => {
            if (event.code === 'Space') {
                return true;
            }
        })
        return false;
    }
    getEnterPress(): boolean {
        document.addEventListener('keyup', event => {
            if (event.code === 'Enter') {
                return true;
            }
        })
        return false;
    }
    getMouseClick(): boolean {
        document.addEventListener('click', () => {
            return true;
        })
        return false;
    }

    getButtonClick(x: number, y: number, x1: number, y1: number, w: number, h: number): boolean {
        if (x >= x1 && x <= x1 + w && y >= y1 && y <= y1 + h) {
            return true;
        }
        return false;
    }


}