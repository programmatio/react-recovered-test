// TODO: Remove this `raf` polyfill once the below issue is sorted
// https://github.com/facebookincubator/create-react-app/issues/3199
import { raf } from "./tempPolyfills";

// TODO: Enzyme 3 braking changes not compatible with create-react-app
// https://github.com/facebookincubator/create-react-app/issues/3206
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
