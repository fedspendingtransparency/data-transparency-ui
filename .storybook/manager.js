import { addons } from 'storybook/manager-api';
import index from "./theme/index"
addons.setConfig({
  theme: index,
});