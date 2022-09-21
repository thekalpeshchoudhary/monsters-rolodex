import "./search-box.styles.css";

interface ISearchBoxProps extends IChangeHandlerProps {
  className: string;
  placeholder: string;
}
interface IChangeHandlerProps {
  onChangeHandler: () => void;
}

const SearchBox = ({
  placeholder,
  className,
  onChangeHandler,
}: ISearchBoxProps) => (
  <input
    type="search"
    placeholder={placeholder}
    className={`search-box ${className}`}
    onChange={onChangeHandler}
  />
);

// class SearchBox extends Component {
//   render() {
//     return (
//       <input
//         type="search"
//         placeholder={this.props.placeholder}
//         className={`search-box ${this.props.className}`}
//         onChange={this.props.onChangeHandler}
//       />
//     );
//   }
// }

export default SearchBox;
