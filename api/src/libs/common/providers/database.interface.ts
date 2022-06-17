
export interface DatabaseProvider {
    startup(): Promise<boolean>;
    close();
}
