import React, {ChangeEvent, KeyboardEvent, useLayoutEffect, useRef, useState} from "react";
import classNames from "classnames";
import {TextAreaProps} from "./TextArea.types";
import styles from "./TextArea.module.scss";
import {applyHighlights} from "./TextArea.helpers";

const ENTER_KEY_CODE = "Enter";

export const TextArea: React.FC<TextAreaProps> = ({
                                                    className,
                                                    highlightTags = false,
                                                    value,
                                                    setValue,
                                                    onSubmit,
                                                    ...attributes
                                                  }) => {
  const textAreaRef = useRef<HTMLDivElement>(null);

  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  const textAreaClasses = classNames(
    styles.textAreaContainer,
    className,
  )

  const onKeyDownHandler = (event: KeyboardEvent<HTMLTextAreaElement>): void => {
    const isKeyEnter = event.code === ENTER_KEY_CODE;
    const isKeyShifted = event.shiftKey;

    if (isKeyEnter && !isKeyShifted) {
      event.preventDefault();
      onSubmit()
    }
  }

  const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    const value = event.target.value;

    setValue(value)
  }

  useLayoutEffect(() => {
    const currentElement = textAreaRef.current;

    if (!currentElement) return;

    const updateSize = (): void => {
      setWidth(currentElement.clientWidth);
      setHeight(currentElement.clientHeight);
    }

    window.addEventListener('resize', updateSize);

    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, [textAreaRef]);

  return (
    <div className={textAreaClasses} ref={textAreaRef}>
      {highlightTags && <div style={{width: width, height: height}} className={styles.backdrop}>
        <div dangerouslySetInnerHTML={{__html: applyHighlights(value)}} className={styles.highlights}></div>
      </div>}

      <textarea style={{width: width, height: height}}
                value={value}
                onChange={onChangeHandler}
                onKeyDown={onKeyDownHandler}
                {...attributes}
      />
    </div>
  );
};

