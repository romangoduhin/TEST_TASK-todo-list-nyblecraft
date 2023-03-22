import React, {ChangeEvent, KeyboardEvent, UIEvent, useLayoutEffect, useRef, useState} from "react";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const backDropRef = useRef<HTMLDivElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

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

    setValue(value);
  }

  const handleScroll = (event: UIEvent<HTMLElement>): void => {
    if (!backDropRef.current) return;

    backDropRef.current.scrollTop = event.currentTarget.scrollTop;
  }

  useLayoutEffect(() => {
    const currentElement = containerRef.current;

    if (!currentElement) return;

    const updateSize = (): void => {
      setWidth(currentElement.clientWidth);
      setHeight(currentElement.clientHeight);
    }

    window.addEventListener('resize', updateSize);

    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, [containerRef]);

  return (
    <div className={textAreaClasses} ref={containerRef}>
      {highlightTags && (
        <div ref={backDropRef} style={{width: width, height: height}} className={styles.backdrop}>
          <div dangerouslySetInnerHTML={{__html: applyHighlights(value)}} className={styles.highlights}/>
        </div>
      )}

      <textarea style={{width: width, height: height}}
                ref={textAreaRef}
                value={value}
                onChange={onChangeHandler}
                onScroll={handleScroll}
                onKeyDown={onKeyDownHandler}
                {...attributes}
      />
    </div>
  );
};

