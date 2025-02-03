import { ReactElement, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@heroui/react";
import { ProductItem } from "../../interfaces/product";
import styles from "./product.module.scss";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as faHeartSolid,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import {
  addWishList,
  getWishList,
  removeWishList,
} from "../../features/wishlist/wishlist";
import { useDispatch, useSelector } from "react-redux";
import {
  addCart,
  removeCart,
  getCart,
  editCart,
} from "../../features/cart/cart";

const priceFormat = (price: number) =>
  price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");

type ProductProps = {
  item: ProductItem;
  isCart?: boolean;
  isRow?: boolean;
};

export default function Product({
  item,
  isCart,
  isRow,
}: ProductProps): ReactElement {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const wishlist = useSelector(getWishList);
  const cart = useSelector(getCart);
  const [countProduct, setCountProduct] = useState(1);
  function removeList() {
    if (isCart) {
      dispatch(removeCart(item));
    } else {
      dispatch(removeWishList(item.id));
    }
  }
  const [count, setCount] = useState(item.count);
  return (
    <>
      <Card className={clsx(styles.product)} shadow="sm">
        <CardBody className="overflow-visible p-0">
          <div
            className={clsx(styles.product__item, isRow && styles.product__row)}
          >
            <div className={styles.product__image} onClick={onOpen}>
              <img src={`/img/product/${item.img}`} alt={item.name} />
              {item && item.oldPrice > 0 && (
                <div className={styles.product__image__overlay}>Скидка %</div>
              )}
            </div>
            <div className={styles.product__content}>
              <div className={styles.product__title} onClick={onOpen}>
                {item.name}{" "}
              </div>
              <div className={styles.product__price}>
                {priceFormat(item.price)} ₽
                {item && item.oldPrice > 0 && (
                  <span className={styles.product__price__old}>
                    {priceFormat(item.oldPrice)} ₽
                  </span>
                )}
                {isRow && (
                  <div className={styles.product__controls}>
                    {isCart && (
                      <Input
                        endContent={
                          <div className="pointer-events-none flex items-center">
                            <span className="text-default-400 text-small">
                              шт.
                            </span>
                          </div>
                        }
                        labelPlacement="outside"
                        min={1}
                        max={100}
                        value={count?.toString()}
                        onValueChange={(e) => {
                          setCount(Number(e));
                          dispatch(editCart({ ...item, count: Number(e) }));
                        }}
                        classNames={{
                          base: clsx(styles.product__info__buy__input),
                        }}
                        type="number"
                      />
                    )}
                    {isRow && (
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        className={styles.product__remove}
                        onClick={removeList}
                      />
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
      <Modal
        backdrop="blur"
        size="5xl"
        scrollBehavior="outside"
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalContent>
          {() => (
            <>
              <ModalBody>
                <div className={styles.product__info}>
                  <div className={styles.product__info__img}>
                    <img src={`/img/product/${item.img}`} alt={item.name} />
                  </div>
                  <div className={styles.product__info__content}>
                    <div className={styles.product__info__title}>
                      {item.name}
                    </div>
                    <div
                      className={clsx(
                        item.oldPrice > 0 && styles.sale,
                        styles.product__info__price
                      )}
                    >
                      {priceFormat(item.price)} ₽
                      {item && item.oldPrice > 0 && (
                        <span className={styles.product__info__price__old}>
                          {priceFormat(item.oldPrice)} ₽
                        </span>
                      )}
                      {item && item.oldPrice > 0 && (
                        <div className={styles.product__info__discount}>
                          Скидка {""}
                          {100 - Math.round((item.price / item.oldPrice) * 100)}
                          %
                        </div>
                      )}
                    </div>
                    <div className={styles.product__info__buy}>
                      <Input
                        endContent={
                          <div className="pointer-events-none flex items-center">
                            <span className="text-default-400 text-small">
                              шт.
                            </span>
                          </div>
                        }
                        labelPlacement="outside"
                        placeholder="1"
                        min={1}
                        max={100}
                        classNames={{
                          base: styles.product__info__buy__input,
                        }}
                        value={count?.toString()}
                        type="number"
                        onValueChange={(e) => setCountProduct(Number(e))}
                        isDisabled={cart.some((i) => i.id === item.id)}
                      />
                      <Button
                        className={styles.product__info__buy__btn}
                        variant="ghost"
                        onPress={() =>
                          dispatch(addCart({ ...item, count: countProduct }))
                        }
                        isDisabled={cart.some((i) => i.id === item.id)}
                      >
                        {cart.some((i) => i.id === item.id)
                          ? "В корзине"
                          : "В Корзину"}
                      </Button>
                      <div className={styles.product__info__heart}>
                        {wishlist.find((i) => i.id === item.id) ? (
                          <FontAwesomeIcon
                            icon={faHeartSolid}
                            onClick={() => dispatch(removeWishList(item.id))}
                          />
                        ) : (
                          <FontAwesomeIcon
                            icon={faHeartRegular}
                            onClick={() => dispatch(addWishList(item))}
                          />
                        )}
                      </div>
                    </div>
                    <div className={styles.product__info__description}>
                      <div className={styles.product__info__description__title}>
                        Характеристики
                      </div>
                      {item.info.length > 0 &&
                        item.info.map((info) => (
                          <div
                            className={styles.product__info__description__item}
                            key={info.id}
                          >
                            <div
                              className={
                                styles.product__info__description__item__title
                              }
                            >
                              {info.title}
                            </div>
                            <div
                              className={
                                styles.product__info__description__item__text
                              }
                            >
                              {info.text}
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
