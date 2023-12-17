import { Breakpoints } from '@displaykit/responsive_styles';

// Generics
type ResposiveProperty<Type> = Partial<Record<Breakpoints, Type>>;

export interface StyleSheet {
    fontFamily?: ResposiveProperty<string> | string;
    backgroundColor?: ResposiveProperty<string> | string;
}