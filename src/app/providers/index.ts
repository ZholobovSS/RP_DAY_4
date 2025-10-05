import { compose } from '@/shared/lib/compose';
import { withTheme } from './MUI';

export const withProviders = compose(withTheme);
