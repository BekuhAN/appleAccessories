import { ReactElement } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
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
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import {
  addWishList,
  getWishList,
  removeWishList,
} from "../../features/wishlist/wishlist";
import { useDispatch, useSelector } from "react-redux";

const priceFormat = (price: number) =>
  price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");

interface SmallProductProps {
  item: ProductItem;
  isCart?: boolean;
}

export default function SmallProduct({
  item,
  isCart,
}: SmallProductProps): ReactElement {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const wishlist = useSelector(getWishList);
  return (
    <>
      <Card className={styles.product} isPressable shadow="sm" onPress={onOpen}>
        <CardBody className="overflow-visible p-0">
          <div className={styles.product__image}>
            <img src={`/img/product/${item.img}`} alt={item.name} />
            {item && item.oldPrice > 0 && (
              <div className={styles.product__image__overlay}>Скидка %</div>
            )}
          </div>
        </CardBody>
        <CardFooter>
          <div className={styles.product__content}>
            <div className={styles.product__title}>{item.name} </div>
            <div className={styles.product__price}>
              {priceFormat(item.price)} ₽
              {item && item.oldPrice > 0 && (
                <span className={styles.product__price__old}>
                  {priceFormat(item.oldPrice)} ₽
                </span>
              )}
            </div>
          </div>
        </CardFooter>
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
                        type="number"
                      />
                      <Button
                        className={styles.product__info__buy__btn}
                        variant="ghost"
                      >
                        В Корзину
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
