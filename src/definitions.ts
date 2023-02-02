export interface WifiPluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
