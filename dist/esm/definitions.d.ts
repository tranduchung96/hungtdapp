export interface HungtdAppPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
