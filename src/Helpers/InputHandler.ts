
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


}