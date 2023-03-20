SlideGrid
import NextIcon from 'assets/icons/next.svg';
import PrevIcon from 'assets/icons/prev.svg';
import React, { useCallback, useRef, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { SpaceProps } from 'styled-system';
import { Box, Flex } from 'theme-ui';
import { ButtonRoundEffect } from 'components';
import { SectionType } from '@ott/api/dist/api-client/schemas';
import useSliderSize from 'hooks/useSliderMargin';
import chunk from 'lodash/chunk';

const renderArrowPrevMx = (top: number, display: boolean) => (onClickHandler: () => void) => (
    <Flex
        sx={{
            visibility: display ? 'visible' : 'hidden',
            opacity: display ? 1 : 0,
            transition: '400ms',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 100,
            borderRadius: 20,
            overflow: 'hidden',
            position: 'absolute',
            top: top,
            left: -24,
            width: 40,
            height: 40,
            cursor: 'pointer',
            backgroundColor: 'darkGray',
            boxShadow: '0px 0px 4px #000000',
            '@media screen and (min-width: 768px) and (max-width: 1200px)': {
                top: '40%',
            },
        }}
        bg="alternativeBackground">
        <ButtonRoundEffect
            aria-label="prev"
            onClick={onClickHandler}
            variant="wrapper"
            sx={{ width: 40, height: 40, ':active': { transform: 'translateX(-1px) !important' } }}>
            <PrevIcon />
        </ButtonRoundEffect>
    </Flex>
);
const renderArrowNextMx = (top: number, display: boolean) => (onClickHandler: () => void) => (
    <Flex
        sx={{
            visibility: display ? 'visible' : 'hidden',
            opacity: display ? 1 : 0,
            transition: '400ms',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
            overflow: 'hidden',
            position: 'absolute',
            top: top,
            right: -24,
            zIndex: 1000,
            width: 40,
            height: 40,
            backgroundColor: 'darkGray',
            boxShadow: '0px 0px 4px #000000',
            cursor: 'pointer',
            '@media screen and (min-width: 768px) and (max-width: 1200px)': {
                top: '40%',
            },
        }}
        bg="alternativeBackground">
        <ButtonRoundEffect
            aria-label="next"
            onClick={onClickHandler}
            variant="wrapper"
            sx={{ width: 40, height: 40, ':active': { transform: 'translateX(1px) !important' } }}>
            <NextIcon />
        </ButtonRoundEffect>
    </Flex>
);
const setJustifyContent = (hoverIdx: number, columns: number) => {
    if (hoverIdx === 0) {
        return 'flex-start';
    }
    if (hoverIdx === columns - 1) {
        return 'flex-end';
    }
    return 'center';
};

export const SliderContext = React.createContext<{
    hoverId: number | string | null;
    setHoverId: (id: number | string | null) => void;
} | null>(null);
export const useSliderContext = () => React.useContext(SliderContext);
SliderContext.displayName = 'SliderContext';

const TOP_MARGIN = 23;
const BOTTOM_MARGIN = 40;

const checkTopButton = (height: number) => {
    return (height - 40) * 0.4 + TOP_MARGIN * 2;
};

const HOVER_ITEM_DURATION_TIMEOUT = 500;

export const SlideGrid = (props: {
    rows?: number;
    columns: number;
    itemHeight: number;
    mx?: number;
    zoom: number;
    showIndicators?: boolean;
    children: React.ReactNodeArray;
    containerSpace?: SpaceProps | object;
    type?: SectionType | string | undefined;
    gridView?: boolean;
}) => {
    const {
        rows = 1,
        columns,
        showIndicators = true,
        mx = 0,
        itemHeight,
        zoom,
        containerSpace,
        type,
        gridView,
    } = props;
    // eslint-disable-next-line react/destructuring-assignment
    const pages = chunk(props.children, rows * columns);
    const topBtn = checkTopButton(itemHeight);
    const [selectPage, setSelectPage] = useState(0);
    const [hover, setHover] = useState(false);
    const displayNextBtn = selectPage < pages.length - 1 && pages.length > 1 && hover;
    const displayPrevBtn = selectPage > 0 && pages.length > 1 && hover;
    const renderArrowNext = renderArrowNextMx(topBtn, displayNextBtn);
    const renderArrowPrev = renderArrowPrevMx(topBtn, displayPrevBtn);
    const [hoverId, setHoverId] = useState<null | number | string>(null);
    const [hoverIdx, setHoverIdx] = useState(-1);
    const [isItemHover, setIsItemHover] = useState(false);
    const setHoverIdxTimeoutRef = useRef<number>(0);
    const setSelectedPage = (index: number) => {
        setSelectPage(index);
    };
    const stateSliders = Array.from(Array(pages.length).keys());
    const dynamicWidth = `calc(1/${columns}*100% - (1 - 1/${columns})*16px)`;
    const height = itemHeight + BOTTOM_MARGIN + 2 * TOP_MARGIN;

    const onEnterItem = (idx: number) => {
        clearTimeout(setHoverIdxTimeoutRef.current);
        setHoverIdxTimeoutRef.current = setTimeout(() => {
            setIsItemHover(true);
            setHoverIdx(idx);
        }, HOVER_ITEM_DURATION_TIMEOUT);
    };

    const onLeaveItem = useCallback(() => {
        clearTimeout(setHoverIdxTimeoutRef.current);
        setIsItemHover(false);
    }, []);

    const { margin } = useSliderSize({
        sectionType: type ?? '',
        itemHeight: itemHeight,
        gridView: gridView ?? false,
    });

    return (
        <Flex
            className={`${type}-${itemHeight}-${height}`}
            sx={{
                height,
                alignItems: 'center',
                ...(containerSpace as {}),
                m: margin,
            }}>
            <Box
                onMouseOver={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                mx={-mx}
                sx={{
                    zIndex: hoverId ? 2 : 0,
                    height,
                    width: '100%',
                    '.carousel-root': {
                        // paddingBottom: showIndicators && pages.length > 1 ? 40 : 0,
                    },
                    '.carousel .slide': {
                        background: 'inherit',
                    },
                    '.css-i9l3dq': {
                        overflow: 'unset !important',
                    },
                    '.carousel.carousel-slider': {
                        overflow: 'visible',
                    },
                    '.carousel .control-dots': {
                        display: 'none',
                    },
                    position: 'relative',
                }}>
                {hover && pages.length > 1 && (
                    <Flex
                        sx={{
                            justifyContent: 'center',
                            position: 'absolute',
                            right: 0,
                            top: TOP_MARGIN,
                            '@media screen and (min-width: 768px) and (max-width: 992px)': {
                                top: 70,
                            },
                        }}>
                        {stateSliders.map((item, idx) => (
                            <Box
                                key={idx}
                                sx={{
                                    backgroundColor: idx === selectPage ? 'primary' : 'blurText',
                                    width: 12,
                                    height: 2,
                                    ml: '3px',
                                }}
                            />
                        ))}
                    </Flex>
                )}
                <SliderContext.Provider value={{ setHoverId, hoverId }}>
                    <Carousel
                        autoPlay={false}
                        interval={10000}
                        showIndicators={showIndicators && pages.length > 1}
                        showThumbs={false}
                        showStatus={false}
                        onChange={setSelectedPage}
                        {...{ renderArrowPrev, renderArrowNext }}>
                        {pages.map((page, pageIdx) => (
                            <Flex
                                sx={{
                                    height,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent:
                                        page.length === columns ? setJustifyContent(hoverIdx, columns) : 'flex-start',
                                }}
                                key={pageIdx}>
                                {page.map((item, idx) => (
                                    <Box
                                        onMouseEnter={() => onEnterItem(idx)}
                                        onMouseLeave={onLeaveItem}
                                        mr={idx < columns - 1 ? 3 : 0}
                                        sx={{
                                            mt: 2 * TOP_MARGIN,
                                            mb: BOTTOM_MARGIN,
                                            width: dynamicWidth,
                                            alignItems: 'center',
                                            transition: '400ms',
                                            flexShrink: 0,
                                            ...(isItemHover &&
                                                pageIdx === selectPage &&
                                                idx === hoverIdx && {
                                                    width: (zoom * 1112) / columns,
                                                    zIndex: 100,
                                                    maxWidth: 'calc(100% - 40px);',
                                                    '@media screen and (max-width: 992px)': {
                                                        width: (zoom * 720) / columns,
                                                    },

                                                    '@media screen and (min-width: 1200px)': {
                                                        width: (zoom * 1112) / columns,
                                                    },
                                                }),
                                        }}
                                        key={idx}>
                                        {item}
                                    </Box>
                                ))}
                            </Flex>
                        ))}
                    </Carousel>
                </SliderContext.Provider>
            </Box>
        </Flex>
    );
};

export const SlideGridItem = ({ id, children }: React.PropsWithChildren<{ id: number | string }>) => {
    const ctx = useSliderContext();
    const setHoverIdTimeoutRef = useRef<number>(0);
    const onEnterItem = useCallback(() => {
        clearTimeout(setHoverIdTimeoutRef.current);
        setHoverIdTimeoutRef.current = setTimeout(() => {
            ctx?.setHoverId(id);
        }, HOVER_ITEM_DURATION_TIMEOUT);
    }, [ctx, id]);

    const onLeaveItem = useCallback(() => {
        clearTimeout(setHoverIdTimeoutRef.current);
        ctx?.setHoverId(null);
    }, [ctx]);

    return (
        <Box key={id} onMouseEnter={onEnterItem} onMouseLeave={onLeaveItem}>
            {children}
        </Box>
    );
};
