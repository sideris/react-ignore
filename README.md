# React-ignore
React Ignore is a Component that can be used to wrap components or elements so React can't interfere

Example usage

    class SomeComponent extends React.Component {
      render() {
        return (
          <SomeOtherComponent>
            <div id="not-ignored"></div>
            <Ignore><div id="ignored"></div></Ignore>
          </SomeOtherComponent>
        );
      }
    }
